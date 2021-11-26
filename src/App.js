import styles from './App.module.scss';
import Search from './components/Search/Search';
import StudentList from './components/StudentList/StudentList';
import * as c from './actions/action-constants';

function App() {
  return (
    <div className={styles.App}>
      <Search dispatchAction={c.SEARCH_STUDENTS} placeholder="Search by name" />
      <Search dispatchAction={c.SEARCH_TAGS} placeholder="Search by tag" />
      <StudentList />
    </div>
  );
}

export default App;
