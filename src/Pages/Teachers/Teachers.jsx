import React from "react";
import "./Teachers.css";
import TeacherCard from "../../Components/TeacherCard/TeacherCard";
import testTeacher from "/testTeacher.png";

const Teachers = () => {
  return (
    <div className="teachers-page">
      <h1 className="teachers-title">精英师资</h1>
      <div className="teachers-filter">
        <select className="filter-select">
          <option value="">专业类别</option>
          {/* Add more options as needed */}
        </select>
        <select className="filter-select">
          <option value="">毕业国家</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="teachers-list">
        <TeacherCard
          name="SIDNEY"
          description="来自美国/加州大学伯克利法学院"
          details="会获取美国加州大学伯克利法学院，美国南加州大学，英国华威大学，新加坡国立大学等多个法学院 offer。如果是你申请名校美国法学院 LLM，欢迎点击咨询预约与我合作，我在美国等你！"
          imageUrl={testTeacher} // Replace with actual image path
        />
        <TeacherCard
          name="SIDNEY"
          description="来自美国/加州大学伯克利法学院"
          details="会获取美国加州大学伯克利法学院，美国南加州大学，英国华威大学，新加坡国立大学等多个法学院 offer。如果是你申请名校美国法学院 LLM，欢迎点击咨询预约与我合作，我在美国等你！"
          imageUrl={testTeacher} // Replace with actual image path
        />
        {/* Add more <TeacherCard /> components as needed */}
      </div>
    </div>
  );
};

export default Teachers;
