import React from 'react'
import { TermsConditionContainer } from './terms-conditions.style'
import NavbarOffcanvase from '../Navbar/Navbar'
import Footer from '../footer/footer'
import { Link } from 'react-router-dom'

function TermsConditions() {
    const firstTitle = [
        {id:'qrtwesdf32163', title:'Online store terms'},
        {id:'weoiufha;sdon16354', title:'Completeness and timeliness of information'},
        {id:'anvcapoinq516462' , title:'Optional tools'},
    ];
    const secondTitle = [
        {id:'vmskngwpioetfq' , title:'General conditions'},
        {id:'eaokfqwoefmaxca' , title:'Modifications to the service and prices'},
        {id:'[wpfalmcvaposvjngh' , title:'Third-party links'},
    ];
    return (
        <>
            <NavbarOffcanvase/>
            <TermsConditionContainer>
                <nav className='breadcrumb-nav' aria-label="breadcrumb">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Terms & Conditions</li>
                        </ol>
                    </div>
                </nav>
                <div className="container">
                    <div className="text-parent">
                        <h1>Terms & Conditions</h1>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin , lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
                        <p>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
                    </div>
                    <div className="row">
                        {firstTitle.map((item)=>{
                            return (
                                <div key={item.id} className="col-lg-6 col-md-6">
                                    <div className="child">
                                        <h4>{item.title}</h4>
                                        <p>Lorem Ipsum is simply dummy the printing typesettingindustry. Lorem Ipsum has been the standard.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing typesettingindustry. Lorem Ipsum has been the industry’s standard dummytext ever since the when an unknown printer took a galley of typeand scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            )
                        })}
                        {secondTitle.map((item)=>{
                            return (
                                <div key={item.id} className="col-lg-6 col-md-6">
                                    <div className="child">
                                        <h4>{item.title}</h4>
                                        <p>Lorem Ipsum is simply dummy the printing typesettingindustry. Lorem Ipsum has been the standard.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing typesettingindustry. Lorem Ipsum has been the industry’s standard dummytext ever since the when an unknown printer took a galley of typeand scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </TermsConditionContainer>
            <Footer/>
        </>
    )
}

export default TermsConditions
