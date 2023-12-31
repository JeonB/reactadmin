import { useMemo, useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function InputSample() {
  function countActiveUsers(
    users: { id: number; username: string; email: string; active: boolean }[],
  ) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
  }

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    active: false,
  });
  const { username, email, active } = inputs;
  const onChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ]);

  // useRef는 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 데도 쓰임
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
      active,
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
      active: false,
    });
    nextId.current += 1;
  };

  const onRemove = (id: number) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };
  const onToggle = (id: number) => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  };
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default InputSample;
