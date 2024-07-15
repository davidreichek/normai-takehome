import { Share, Eye } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../../components/ui/select"

type ToolbarProps = {
    handleResubmit: () => void;
}

const Toolbar = ({ handleResubmit }: ToolbarProps) => {

    return (
        <div className='flex flex-row'>
            <div className='flex flex-row gap-2'>
                <div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Status</SelectLabel>
                                <SelectItem value="apple">To Do</SelectItem>
                                <SelectItem value="banana">In Progress</SelectItem>
                                <SelectItem value="blueberry">In Review</SelectItem>
                                <SelectItem value="grapes">Blocked</SelectItem>
                                <SelectItem value="pineapple">Ready for Release</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Button
                        variant='outline'
                    >
                        View History
                    </Button>
                </div>
            </div>
            <div className='ml-auto flex flex-row gap-2'>
                <div>
                    <Button
                        variant='outline'
                    >
                        <Share className='w-4 h-4' />
                    </Button>
                </div>
                <div>
                    <Button
                        variant='outline'
                    >
                        <Eye className='w-4 h-4' />
                    </Button>
                </div>
                <div>
                    <Button
                        variant='outline'
                        onClick={() => handleResubmit()}
                    >
                        Resubmit Document
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Toolbar;