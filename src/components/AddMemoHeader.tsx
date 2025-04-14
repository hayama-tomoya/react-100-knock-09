type AddMemoHeaderProps = {
  onAddMemo: () => void;
};


export const AddMemoHeader = ({onAddMemo}: AddMemoHeaderProps) => {
  return (
    <div className="addMemoHeader">
      <p>メモアプリ</p>
      <button onClick={onAddMemo}>+</button>
    </div>
  );
};