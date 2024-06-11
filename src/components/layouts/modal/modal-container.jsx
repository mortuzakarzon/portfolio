import React, { useState } from "react";
import Hero from "../../hero/hero.component";
import FirstChapter from "../first-chapter";

function ModalContainer() {
  const [firstChapterOpen, setFirstChapterOpen] = useState(false);

  const openModal = () => {
    setFirstChapterOpen(true);
  };

  return (
    <>
      <Hero openModal={openModal} />
      {/* Add other sections/components here */}
      {firstChapterOpen && (
        <FirstChapter setFirstChapterOpen={setFirstChapterOpen} />
      )}
    </>
  );
}

export default ModalContainer;
