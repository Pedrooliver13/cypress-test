import { ChangeEvent, useState } from 'react';

import { Input } from 'components/Input';

const Todo = () => {
  const [description, setDescription] = useState<string>('');
  const [allTask, setAllTask] = useState<Array<string>>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDescription(value);
  };

  const handleClick = () => {
    setAllTask((task) => [...task, description]);
  };

  return (
    <div style={{ width: '450px', margin: '0 auto' }}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 25,
          height: 60
        }}
      >
        <h1  data-cy="header">To Do List</h1>
      </header>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Input value={description} onChange={handleChange} name="main-input" />
        <button
          data-cy="button"
          onClick={handleClick}
          style={{ width: '150px', height: '50px', margin: '0 5px' }}
        >
          Add
        </button>
      </div>

      <section>
        <ul>
          {allTask.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Todo;
