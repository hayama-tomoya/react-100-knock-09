import { useState } from "react";

import { AddMemoHeader } from "./AddMemoHeader"
import { AddMemoList } from "./AddMemoList"
import { Memo } from "../type";


type AddMemoProps = {
  memos: Memo[];
  onAddMemo: () => void;
  onSelectedMemo: (id: number) => void;
  onDeleteMemo: (id: number) => void;
};


export const AddMemo = ( { memos, onSelectedMemo, onAddMemo, onDeleteMemo }: AddMemoProps ) => {

  return (
    <div className="addMemo">
      <AddMemoHeader onAddMemo={onAddMemo} />
      <AddMemoList memos={memos} onSelectedMemo={onSelectedMemo} onDeleteMemo={onDeleteMemo} />
    </div>
  );
};