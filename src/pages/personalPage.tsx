import React from "react";
import MainLayout from "../layouts/MainLayout";

interface IPersonalPage{
    User: {Name: string, LastName: string};
}

export default function PersinalPAge(props: IPersonalPage){
    return (
      <MainLayout headerTitle={props.User.Name + " " + props.User.LastName} headerIconClassName={"bi bi-person"} currentNavigationTab={'profile'}>
            <div className="container">
                <div className="row justify-content-center">
                        <div className="col-12 col-lg-2" style= {{textAlign: 'center'}}>
                        <p>
                        300+ слов
                        </p> 
                        </div>
                        <div className="col-12 col-lg-2"  style= {{textAlign: 'center'}}>
                        <p>
                         Начал в 1945 г.
                        </p>
                        </div>
                        <div className="col-12 col-lg-2"  style= {{textAlign: 'center'}}>
                        <p>
                         123 уровень 
                        </p>
                        </div>
                </div>
            </div>
      </MainLayout>
    )
}