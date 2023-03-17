import React, { useEffect } from "react";
import "./style.css";

// react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// components
import UserGoalCard from "../../components/UserGoalCard";

function Manage(props) {
    useEffect(() => {
        // componentDidMount logic here
    }, []);

    return (
        <Container>
            <Row className="userGoalRow">
                <Col size="md-12 col-auto" className="userGoalCol">
                    <h2 className="manageH2">Active Goals</h2>
                    <div className="userGoalDiv">
                        {props.userGoals ? (
                            props.userGoals
                                .filter((userGoal) => userGoal.goalPercent !== 100)
                                .map((userGoal) => (
                                    <UserGoalCard
                                        id={userGoal.userGoalId}
                                        key={userGoal.userGoalId}
                                        goalName={userGoal.goalName}
                                        taskName={userGoal.taskName}
                                        goalPercent={userGoal.goalPercent}
                                    />
                                ))
                        ) : (
                            <span>No goals in this section.</span>
                        )}
                    </div>
                </Col>
            </Row>
            <Row className="userGoalRow" size="md-12">
                <Col size="md-12 col-auto" className="userGoalCol">
                    <h2 className="manageH2">Achieved Goals</h2>
                    <div className="userGoalDiv">
                        {props.userGoals ? (
                            props.userGoals
                                .filter((userGoal) => userGoal.goalPercent === 100)
                                .map((userGoal) => (
                                    <UserGoalCard
                                        id={userGoal.userGoalId}
                                        key={userGoal.userGoalId}
                                        goalName={userGoal.goalName}
                                        goalPercent={userGoal.goalPercent}
                                    />
                                ))
                        ) : (
                            <span>No goals in this section.</span>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Manage;
