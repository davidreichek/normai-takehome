import { useState, useEffect } from "react";
import TestResult from "./components/test-result";
import { TreeNode } from "../../utils";
import Toolbar from "./components/toolbar";

const DocumentDetail = () => {
    const [treeData, setTreeData] = useState<TreeNode | null>(null);
    const [error, setError] = useState<any>(null);
    const [refresh, setRefresh] = useState<number>(Math.random());

    useEffect(() => {
        if (refresh) {
            fetchStream();
        }
    }, [refresh]);

    async function fetchStream() {
        try {
            const response = await fetch('https://api.norm.ai/application/interview/tree');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            if (!response.body) {
                throw new Error('ReadableStream not yet supported in this browser.');
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let result = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                result += decoder.decode(value, { stream: true });
            }

            const json = JSON.parse(result);
            console.log(json)
            setTreeData(json.tree);
        } catch (err) {
            setError((err as Error).message);
            console.error(err);
        }
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!treeData) {
        return <div>Loading...</div>;
    }

    function handleResubmit() {
        setRefresh(Math.random())
    }

    return (
        <div className='p-8 font-dmsans flex flex-col gap-4'>
            <div className='font-semibold text-4xl'>
                Marketing Q3 2024
            </div>
            <Toolbar handleResubmit={handleResubmit} />
            <TestResult node={treeData} />
        </div>
    );
}

export default DocumentDetail;