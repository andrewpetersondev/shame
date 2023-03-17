import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../../components/Container';
import SelectedCategory from '../../components/SelectedCategory';
import Instructions from '../../components/Instructions';
import GoalCard from '../../components/GoalCard';
import TaskOverlay from '../../components/TaskOverlay';
import OkLinkDialog from '../../components/OkLinkDialog';
import './style.css';

function AddGoal(props) {

    const location = useLocation();

    useEffect(() => {
        let queryString = location.search;
        if (queryString) {
            let qsArray = queryString.split('=');
            console.log(qsArray);
            props.getCategoryMatch(qsArray[1]);
            props.getGoalsInCategory(qsArray[1]);
        }
    }, [location.search, props]);


    return (
        <div className='add-goal'>
            <Container>
                {/* <h1 className="addGoalHeader">Add Goal</h1> */}
                <SelectedCategory
                    handleOnChange={props.handleOnChange}
                    categoryId={props.categoryId}
                    getCategories={props.getCategories}
                    categories={props.categories}
                    selectedCategory={props.selectedCategory}
                    clearCategory={props.clearCategory}
                />
                <Instructions
                    instructionsHeading='Instructions'
                    instructionsText='Select a goal.  Our personal coaching monkeys will select a list of activities for you to achieve your goal.  To complete a goal, you will need to successfully complete each of the tasks associated with the goal.  You complete each activity by either getting streak of consecutive days OR doing that activity a total number of times.'
                />
                <div className='goalCardContainer'>
                    {props.goals.length > 0 ?
                        props.goals.map(goal => (
                            <GoalCard
                                id={goal._id}
                                key={goal._id}
                                goalName={goal.goalName}
                                goalTagline={goal.goalTagline}
                                selectGoal={props.selectGoal}
                            />
                        )) : <span>No goals in this category.</span>}
                </div>
                <div>
                    <TaskOverlay
                        showTaskOverlay={props.showTaskOverlay}
                        selectedGoal={props.selectedGoal}
                        tasks={props.tasks}
                        handleAddGoalFormSubmit={props.handleAddGoalFormSubmit}
                        taskOverlayClose={props.taskOverlayClose}
                    />
                </div>
                <div>
                    <OkLinkDialog
                        showOkDialog={props.showOkDialog}
                        okDialogText='Congratulations!  You took another step towards being less of a garbage person!  But seriously, you got this!'
                        okDialogLink='/manage'
                    />
                </div>
            </Container>
        </div>
    );
}

export default AddGoal;