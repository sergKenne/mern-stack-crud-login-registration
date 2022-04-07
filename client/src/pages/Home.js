import React, { useEffect } from 'react';
import {connect} from "react-redux"
import FormIuput from '../components/FormIuput';
import EditFormInput from '../components/EditFormInput';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Task from '../components/Task';
import { getTasks } from '../redux/actions';

const Home = ({ tasks, fetchTask }) => {
    const { tasks:allTask, loading, task } = tasks;

    console.log('tasks', allTask);

    useEffect(() => {
        fetchTask()
    }, []);
    return (
        <div className="home">
            <Header />
            <main className="main">
                <div className="container">
                    <div className="main__content">
                        <div className="main__left">
                            {Object.keys(task).length ? <EditFormInput task={task}/> : <FormIuput />}
                        </div>
                        <div className="main__right">
                            {loading && <Loading />}
                            {allTask.length > 0 ? (
                                allTask.map((task) => {
                                    return <Task task={task} key={task._id} />;
                                })
                            ) : (
                                <h1 style={{ fontSize: '1.6rem', color: '#fff' }}>
                                    Tasts not found
                                </h1>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

const mapStateToProps = state => ({
    tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
    fetchTask: () => dispatch(getTasks())
})

export default connect(mapStateToProps, mapDispatchToProps) (Home);
