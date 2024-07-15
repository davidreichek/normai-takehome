export type TreeNode = {
    name: string;
    type: 'root_node' | 'check_node' | 'sub_check_node';
    status: 'PASS' | 'FAIL';
    overwrite_message: string;
    reason: string;
    children: TreeNode[];
}

export type MessageOutput = "COMMENT" | "OVERWRITE" | "UNALTERED";
export function getMessage(message: string): MessageOutput{
    switch(message){
        case "Comment added to node output by John Doe esq.":
            return "COMMENT"
        case "Node output overwritten by John Doe esq.":
            return "OVERWRITE"
        case "Original node output was left unaltered.":
            return "UNALTERED"
        default:
            return "UNALTERED"

    }
}