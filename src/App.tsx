
import { Memo } from "./type";
import { MemoApp } from "./components/MemoApp";
import "./styles.css";
import { useState } from "react";

export const App = () => {

  const [memos, setMemos] =useState<Memo[]>([]);
  const [selectedMemoId, setSelectedMemoId] = useState<number | null>(null);

  const handleSelectedMemo = (id: number) => {
    setSelectedMemoId(id);
  };

  const handleEditMemo = (id: number, newContent: string) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) =>
        memo.id === id ? { ...memo, content: newContent } : memo
      )
    );
  };

  const handleEditMemoTitle = (id: number, newTitle: string) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) =>
        memo.id === id ? { ...memo, text: newTitle } : memo
      )
    );
  };

  const handleDeleteMemo = (id: number) => {
    setMemos((prev) => prev.filter((memo) => memo.id !== id));
  
    if (selectedMemoId === id) {
      setSelectedMemoId(null);
    }
  };

  const handleChangeHeaderStyle = (
    id: number,
    newStyle: Partial<Memo['headerStyle']>
  ) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) =>
        memo.id === id
          ? { ...memo, headerStyle: { ...memo.headerStyle, ...newStyle } }
          : memo
      )
    );
  };

  const onAddMemo = () => {
    const newMemo: Memo = {
      id: memos.length,
      text: `MEMO${memos.length + 1}`,
      content: '',
      headerStyle: {
        fontWeight: 'normal',
        fontSize: '16px',
        textAlign: 'left',
      }
    };
      setMemos([...memos, newMemo]);
    }

  return (
    <div>
      <MemoApp 
      memos={memos}
      selectedMemoId={selectedMemoId}
      onSelectedMemo={handleSelectedMemo}
      onAddMemo={onAddMemo}
      onEditMemo={handleEditMemo}
      onEditMemoTitle={handleEditMemoTitle}
      onDeleteMemo={handleDeleteMemo}
      onChangeHeaderStyle={handleChangeHeaderStyle}
      />
    </div>

  );
};