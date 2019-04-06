declare namespace RadJav {
    namespace DataStructures {
        class LinkedList {
            root: Node;
            end: Node;
            constructor();
        }
        class Node {
            data: any;
            next: Node;
            prev: Node;
            constructor();
        }
        class Blockchain {
            genesisBlock: Block;
            topBlock: Block;
        }
        class Block {
            height: number;
            data: {
                [name: string]: any;
            };
        }
    }
}
