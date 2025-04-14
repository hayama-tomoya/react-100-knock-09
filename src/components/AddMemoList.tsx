
import { Memo } from "../type";

type AddMemoListProps = {
  memos: Memo[];
  onSelectedMemo: (id: number) => void;
  onDeleteMemo: (id: number) => void;
}

export const AddMemoList = ({ memos, onSelectedMemo, onDeleteMemo }: AddMemoListProps) => {
  return (
    <div className="addMemoList">
      {memos.map((memo) => (
        <div className="memoItem">
          <button key={memo.id} onClick={() => onSelectedMemo(memo.id)}>
            {memo.text}
            <button
              onClick={() => onDeleteMemo(memo.id)}
              className="deleteButton"
            >
              🗑️
            </button>
          </button>
        </div>
      ))}
    </div>
  );
};