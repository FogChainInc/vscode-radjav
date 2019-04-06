import * as path from "path";

export class RadJavTools
{
    static convertToGUIJSON (fileContent: string, fileName: string): string
    {
        let fileType = path.extname (fileName);
        fileType = fileType.toLowerCase ();

        let thisType = "this";
        let newType = "new";

        if (fileType == ".vb")
        {
            thisType = "Me";
            newType = "New";
        }

        let convertibleTypes = [
                { dotNetType: "System.Windows.Forms.Button", radjavType: "RadJav.GUI.Button"},
                { dotNetType: "System.Windows.Forms.Label", radjavType: "RadJav.GUI.Label"},
                { dotNetType: "System.Windows.Forms.TextBox", radjavType: "RadJav.GUI.Textbox"},
                { dotNetType: "System.Windows.Forms.CheckBox", radjavType: "RadJav.GUI.Checkbox"},
                { dotNetType: "System.Windows.Forms.ComboBox", radjavType: "RadJav.GUI.Combobox"},
                { dotNetType: "System.Windows.Forms.RadioButton", radjavType: "RadJav.GUI.Radio"},
                { dotNetType: "System.Windows.Forms.PictureBox", radjavType: "RadJav.GUI.Image"},
                { dotNetType: "System.Windows.Forms.ListView", radjavType: "RadJav.GUI.List"},
                { dotNetType: "System.Windows.Forms.GroupBox", radjavType: "RadJav.GUI.Container"}
            ];
        let guiJSON = [];
        let parents = {};

        for (let iIdx = 0; iIdx < convertibleTypes.length; iIdx++)
        {
            let convType = convertibleTypes[iIdx];
            let findStr = `${newType} ${convType.dotNetType}\\(\\)`;
            findStr = findStr.replace (new RegExp("\\.", "g"), "\\.");
            let findReg = new RegExp (`(?<=${thisType}\\.)(.*)(?= \= ${findStr})`, "g");
            let foundNames = fileContent.match (findReg);

            for (let iJdx = 0; iJdx < foundNames.length; iJdx++)
            {
                let foundName = foundNames[iJdx];
                let obj = { type: convType.radjavType, name: foundName };
                findReg = new RegExp (`(?<=${thisType}\\.${foundName}\\.Location = New System\\.Drawing\\.Point\\()(.*)(?=\\))`);
                obj["position"] = fileContent.match (findReg);
                findReg = new RegExp (`(?<=${thisType}\\.${foundName}\\.Size = New System\\.Drawing\\.Size\\()(.*)(?=\\))`);
                obj["size"] = fileContent.match (findReg);
                findReg = new RegExp (`(?<=${thisType}\\.${foundName}\\.Text = \\")(.*)(?=\\")`);
                obj["text"] = fileContent.match (findReg);
                findReg = new RegExp (`(?<=${thisType}\\.${foundName}\\.Visible = )(.*)`);
                obj["visibility"] = fileContent.match (findReg);

                if (obj["position"] != null)
                {
                    if (obj["position"].length > 0)
                        obj["position"] = obj["position"][0];
                }
                else
                    delete obj["position"];

                if (obj["size"] != null)
                {
                    if (obj["size"].length > 0)
                        obj["size"] = obj["size"][0];
                }
                else
                    delete obj["size"];

                if (obj["text"] != null)
                {
                    if (obj["text"].length > 0)
                        obj["text"] = obj["text"][0];
                }
                else
                    delete obj["text"];

                if (obj["visibility"] != null)
                {
                    if (obj["visibility"].length > 0)
                    {
                        let visible = obj["visibility"][0].toLowerCase ();

                        if (visible == "true")
                            obj["visibility"] = true;

                        if (visible == "false")
                            obj["visibility"] = false;
                    }
                }
                else
                    delete obj["visibility"];

                guiJSON.push (obj);

                findReg = new RegExp (`(?<=${thisType}\\.${foundName}\\.Controls\\.Add\\(${thisType}\\.)(.*)(?=\\))`, "g");
                let howCuteItsAParent = fileContent.match (findReg);

                if (howCuteItsAParent != null)
                {
                    if (howCuteItsAParent.length > 0)
                    {
                        parents[foundName] = obj;

                        for (let iKdx = 0; iKdx < howCuteItsAParent.length; iKdx++)
                        {
                            let child = howCuteItsAParent[iKdx];

                            for (let iUdx = 0; iUdx < guiJSON.length; iUdx++)
                            {
                                let guiObj = guiJSON[iUdx];

                                if (guiObj.name == child)
                                {
                                    if (parents[foundName].children == null)
                                        parents[foundName].children = [];

                                    parents[foundName].children.push (guiObj);
                                    guiJSON.splice (iUdx, 1);

                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }

        return (JSON.stringify (guiJSON, null, 4));
    }
}