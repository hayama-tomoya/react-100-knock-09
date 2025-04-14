
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
        <div key={memo.id} className="memoItem">
          <button onClick={() => onSelectedMemo(memo.id)}>
            {memo.text}
            <span
              onClick={(e) => {
                e.stopPropagation();
                onDeleteMemo(memo.id);
              }}
              className="deleteButton"
            >
              🗑️
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};