import React from 'react';
import "./CourseCard.css";

const CourseCard = (props) => {
    return (
        <div className="card">
            <div className="image__container">
                <img
                    src={props.course.image}
                    alt=""/>
                <div className="level">{props.course.level}</div>
            </div>
            <h3 className="card__title">{props.course.title}</h3>

            <div className="card__info">
                <div className="user">
                    <img
                        src={props.course.user.avatar}
                        alt={props.course.user.name}
                    />
                    <p className="username">{props.course.user.name}</p>
                </div>
                <div className="rating">
                    <p>{props.course.rating}</p>
                </div>
            </div>

            <div className="card__info">
                <div>{`${props.course.students} student`}</div>
                <div>{`Module ${props.course.modules}`}</div>
                <div>{`${props.course.duration / 3600}h`}</div>
            </div>

            {props.course.isMyCourse ? "My Course" : ""}

        </div>
    );
};

export default CourseCard;

