import { useEffect, useState } from "react";
import { MessageOutput, TreeNode, getMessage } from "../../../utils";
import { MessageSquareText, CircleAlert, Search } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";

export type TestDetailProps = {
    node: TreeNode
}

const TestDetail = ({ node }: TestDetailProps) => {
    const [message, setMessage] = useState<MessageOutput>();

    useEffect(() => {
        if (node) {
            setMessage(getMessage(node.overwrite_message))
        }
    }, [node])

    return (
        <>
            <div className='flex flex-row gap-6 mt-6 items-center'>
                <div className='font-bold'>
                    {node.name}
                </div>
                <div className='flex flex-row'>
                    <Button
                        variant={node.status}
                        className='font-semibold'
                    >
                        {node.status === 'PASS' ? 'Compliant' : 'Non-Compliant'}
                    </Button>
                    {
                        message && message === 'COMMENT' ?
                            <Badge className="flex h-6 w-6 shrink-0 p-0 -mx-3 -my-3 items-center justify-center rounded-full">
                                <MessageSquareText className='h-3 w-3 text-blue-500' />
                            </Badge>
                            : null
                    }
                    {
                        message && message === 'OVERWRITE' ?
                            <Badge className="flex h-6 w-6 shrink-0 -mx-3 -my-3 p-0 items-center justify-center rounded-full">
                                <CircleAlert className='h-3 w-3 text-orange-500' />
                            </Badge>
                            : null
                    }
                </div>
                <div className='ml-auto flex flex-row gap-2'>
                    <div>
                        <Button
                            variant='outline'
                        >
                            {message === 'OVERWRITE' ? 'Undo Override' : 'Override'}
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='outline'
                        >
                            <MessageSquareText className='w-4 h-4' />
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant='outline'
                        >
                            <Search className='w-4 h-4' />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestDetail;