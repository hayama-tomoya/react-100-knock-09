import { Memo } from "../type";
import { AddMemo } from "./AddMemo"
import { MemoContent } from "./MemoContent"

type MemoAppProps = {
  memos: Memo[];
  selectedMemoId: number | null;
  onSelectedMemo: (id: number) => void;
  onAddMemo: () => void;
  onEditMemo: (id: number, newContent: string) => void;
  onEditMemoTitle: (id: number, newText: string) => void;
  onDeleteMemo: (id: number) => void;
  onChangeHeaderStyle: (id: number, newStyle: Partial<Memo['headerStyle']>) => void;

}

export const MemoApp = ({ memos, selectedMemoId, onSelectedMemo, onAddMemo, onEditMemo, onEditMemoTitle, onDeleteMemo,  onChangeHeaderStyle }: MemoAppProps) => {
  return (
    <div className="memoApp">
      <AddMemo 
      memos={memos} 
      onSelectedMemo={onSelectedMemo} 
      onAddMemo={onAddMemo} 
      onDeleteMemo={onDeleteMemo}
      />
      <MemoContent
       memo={memos.find((memo) => memo.id === selectedMemoId)} 
       onEditMemo={onEditMemo}
       onEditMemoTitle={onEditMemoTitle}
       onChangeHeaderStyle={onChangeHeaderStyle}
       />
    </div>
  );
};