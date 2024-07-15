import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";
import { Card, CardContent } from "../../../components/ui/card";
import { TreeNode} from "../../../utils";
import TestDetail from "./test-detail";

export type TestResultProps = {
    node: TreeNode
}

const TestResult = ({ node }: TestResultProps) => {

    return (
        <>
            {node.children && node.children.length > 0 && (
                <div className='flex flex-col gap-2'>
                    {node.children.map((childNode, index) => (
                        <Card key={index}>
                            <CardContent>
                                <TestDetail node={childNode} />
                                {childNode.children.length > 0 ?
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className='ml-40'
                                    >
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>
                                                <div>
                                                    View Details
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <TestResult key={index} node={childNode} />
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    :
                                    null
                                }
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
};

export default TestResult;
