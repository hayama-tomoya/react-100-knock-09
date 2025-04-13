import { Memo } from "../type";

type Props = {
  memos: Memo[];
}

export const AddMemoList = ( {memos}: Props ) => {
  return (
    <div className="addMemoList">
     {memos.map((memo) => (
      <button key={memo.id}>{memo.text}</button>
     ))}
    </div>
  );
};