import styles from './App.module.scss';
import Search from './components/Search/Search';
import StudentList from './components/StudentList/StudentList';
import * as c from './actions/action-constants';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Content}>
        <Search dispatchAction={c.SEARCH_STUDENTS} />
        <StudentList />
      </div>
    </div>
  );
}

export default App;
