import { useState } from "react";

import { AddMemoHeader } from "./AddMemoHeader"
import { AddMemoList } from "./AddMemoList"
import { Memo } from "../type";


export const AddMemo = (  ) => {

  const [memos, setMemos] = useState<Memo[]>([]);

  const onAddMemo = () => {
    const newMemo: Memo = {
      id: memos.length,
      text: `MEMO${memos.length + 1}`,
    };
    setMemos([...memos, newMemo]);
  }

  return (
    <div className="addMemo">
      <AddMemoHeader onClickAddMemo={onAddMemo} />
      <AddMemoList memos={memos} />
    </div>
  );
};