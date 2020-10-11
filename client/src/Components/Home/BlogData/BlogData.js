import React from 'react';

const BlogData = (props) => {
    const {title ,description, author, authorImg ,date} = props.blog
    return (
        <div className="card shadow-sm px-3">            
            <div className="card-body row">
                <img height="60" src={authorImg} alt="" />
                <div className="ml-3 align-items-center">
                    <h6 className="text-primary">{author}</h6>
                    <p>{date}</p>
                </div>
            </div>
            <h5>{title}</h5>
            <p className="card-text text-secondary mt-4">{description}</p>
        </div>
    );
};

export default BlogData;