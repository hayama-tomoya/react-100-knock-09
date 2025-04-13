type Props = {
  onClickAddMemo: () => void;
};


export const AddMemoHeader = ({onClickAddMemo}: Props) => {
  return (
    <div className="addMemoHeader">
      <p>メモアプリ</p>
      <button onClick={onClickAddMemo}>+</button>
    </div>
  );
};