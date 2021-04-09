import { MdLibraryBooks } from "react-icons/md";

const Faculty = () => {
    return ( 
        <div className="faculty">
            <div className="faculty-bg">
            <h2 className = "text-center text-light">We care about your future! <br/> Get access to all the information you need about your course.</h2>
            </div>
            <div className="faculty-select-heading">
                <h4 className = "text-center mt-4 mb-4 text-primary">Select A  Faculty</h4>
            <div className="faculty-select-content container">

            <select className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example">
                <option  selected>SCIENCES</option>
                 <option value="1">ANATOMY</option>
                <option value="2">BIOCHEMISTRY</option>
                <option value="3">BIOLOGY</option>
                <option value="4">COMPUTER SCIENCE</option>
                <option value="5">ENVIRONMENTAL SCIENCE</option>
                <option value="6">MICROBIOLOGY</option>
                <option value="7">NURSING</option>
                <option value="8">PHARMACY</option>
                <option value="9">DENTISTRY</option>
                </select>

            <select className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example">
                <option selected>ARTS</option>
                <option value="1">LAW</option>
                <option value="2">HISTORY</option>
                <option value="3">ENGLISH AND LITERARY STUDIES</option>
                <option value="4">PHILOSOPHY</option>
                <option value="5">MUSIC & DRAMA</option>
                <option value="6">POLITICAL SCIENCE</option>
                <option value="7">LANGUAGES</option>
                </select>

            <select className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example">
                <option  selected>SOCIAL SCIENCES</option>
                <option value="1">ECONOMICS</option>
                <option value="2">SOCIOLOGY</option>
                <option value="3">PSYCHOLOGY</option>
                <option value="4">SOCIAL WORKS</option>
                <option value="5">ANTHROPOLOGY</option>
                <option value="6">POLITICAL SCIENCE</option>
                <option value="7">GEOGRAPHY</option>                
                </select>

            <select className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example">
                <option  selected>MANAGEMENT SCIENCES</option>
                <option value="1">ACCOUNTING</option>
                <option value="2">BANKING AND FINANCE</option>
                <option value="3">BUSINESS ADMINSTRATION</option>
                <option value="4">INDUSTRIAL RELATION</option>
                <option value="5">INSURANCE</option>
                <option value="6">MARKETING</option>
                <option value="7">PUBLIC ADMINSTRATION</option>
                </select>

            <select  className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example">
                <option selected>EDUCATION</option>
                <option value="1">ACCOUNTING EDUCATION</option>
                <option value="2">BUSINESS EDUCATION</option>
                <option value="3">BIOLOGY ADMINSTRATION</option>
                <option value="4">GUIDANCE AND COUNSELLING</option>
                <option value="5">ENGLISH EDUCATION</option>
                <option value="6">ADULT EDUCATION</option>
                </select>

            <select className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example">
                <option selected>ENGINEERING</option>
                <option value="1">SYSTEMS ENGINEERING</option>
                <option value="2">PETROLEUM ENGINEERING</option>
                <option value="3">METALLURGICAL AND MATERIALS ENGINEERING</option>
                <option value="4">MECHANICAL ENGINEERING</option>
                <option value="5">ELECTRICAL AND ELECTRONICS ENGINEERING</option>
                <option value="6">CIVIL ENGINEERING</option>
                <option value="6">WATER ENGINEERING</option>
                <option value="6">MINING ENGINEERING</option>
                <option value="6">CHEMICAL ENGINEERING</option>
                </select>

            </div>
            </div>

            <div className="faculty-test">
                <div className="container">
                   <p className = "">Take this test to know
                            which course is best for you.  <a href="" className = ""><MdLibraryBooks></MdLibraryBooks></a></p>

                </div>
            </div>
            <div className="faculty-consult container">
                <p>
                Woud you like to speak to an undergraduate currently studying your course in your preffered institution? 
                <a href=""> Click Here to Reach Out</a>
                </p>
            </div>
        </div>
        
    );
}
 
export default Faculty;