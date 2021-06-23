import PageLayout from './components/PageLayout';
import LoginRegisterSwitch from './components/utils/LoginRegisterSwitch';
import { connect } from 'react-redux';
import { authCheck } from './redux/reducers/userReducer';
import { useEffect } from 'react';
// import { useEffect } from 'react';

function App(props) {
  const dispatch = props.dispatch;

  useEffect(() => {
    dispatch(authCheck());
  }, [dispatch])

  console.log(props);

  return (
    <div className="App">
      <PageLayout>
        {/* <button onClick={check}>check</button> */}
        <LoginRegisterSwitch />
      </PageLayout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    user: state.user,
    error: state.error,
    formData: state.formData
  }
}

export default connect(mapStateToProps)(App);