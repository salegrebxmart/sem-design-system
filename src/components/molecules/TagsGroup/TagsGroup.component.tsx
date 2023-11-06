import { FC, useState } from 'react';
import Tag from '../../atoms/Tag';

interface TagsGroupProps {
  values: string[];
  className?: string;
}
const TagsGroup: FC<TagsGroupProps> = ({ values, className }) => {
  const [tags, setTags] = useState<string[]>(values);
  const handleEraseTag = (index: number) => {
    const currentTags = [...tags];
    currentTags.splice(index, 1);
    setTags(currentTags);
  };
  return (
    <div className={'flex gap-2 flex-wrap bg-slate-100 dark:bg-slate-900 p-4 rounded-3xl' + ' ' + className}>
      {tags.map((item, index) => (
        <Tag key={index} text={item} onClose={() => handleEraseTag(index)} />
      ))}
    </div>
  );
};

export default TagsGroup;
