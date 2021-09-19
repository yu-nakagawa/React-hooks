import { useState } from "react";
import { Content, Title, PublishButton } from "./index";

const Article = (props) => {
  const [isPublished, setIspublished] = useState(false);
  const publishArticle = () => {
    setIspublished(true);
  };
  return (
    <div>
      <Title title={props.title} />
      <Content title={props.content} />
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </div>
  );
};

export default Article;
