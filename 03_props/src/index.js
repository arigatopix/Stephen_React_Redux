import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail
        author="Sam"
        timeAgo="Yesterday at 6.00 PM"
        content="Awesome app"
        avatarImage={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 10.00 PM"
        content="Good job"
        avatarImage={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Today at 10.30 PM"
        content="I love it!!"
        avatarImage={faker.image.avatar()}
      />
    </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// JSX เวลาจะแทนค่า ใน ""  ด้วย object ให้ใช้ {} ไปเลย
// How props work
/**
 * HOW props work
 * - provide parent to child
 * - props = property
 * - ส่งข้อมูลให้ child ใน attibute ของ parent
 **
 * กรณีแสดง children ของ components ผ่าน props เช่น
 * <childComponents1>
 *      <childComponents2><childComponents2> // Child 1 จะแสดง child 2 ผ่าน props children
 * </childComponents1>
 * - 
 */
