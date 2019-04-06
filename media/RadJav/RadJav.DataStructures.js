var RadJav;
(function (RadJav) {
    var DataStructures;
    (function (DataStructures) {
        var LinkedList = (function () {
            function LinkedList() {
                this.root = null;
                this.end = null;
            }
            return LinkedList;
        }());
        DataStructures.LinkedList = LinkedList;
        var Node = (function () {
            function Node() {
                this.data = null;
                this.next = null;
                this.prev = null;
            }
            return Node;
        }());
        DataStructures.Node = Node;
        var Blockchain = (function () {
            function Blockchain() {
            }
            return Blockchain;
        }());
        DataStructures.Blockchain = Blockchain;
        var Block = (function () {
            function Block() {
            }
            return Block;
        }());
        DataStructures.Block = Block;
    })(DataStructures = RadJav.DataStructures || (RadJav.DataStructures = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.DataStructures.js.map