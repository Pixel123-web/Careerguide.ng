import "./Services.css"
import Button from "./Button"

const Services = () => {
    return (  
        <div>
            <div className="top">
                <div className="left">
                    <p>
                    We’re  experts and certified agents in the education sector. If you’re in a leadership role, 
                    you’ll recognise that to participate in the competitive education landscape, today’s leaders 
                    need to effectively market their school’s strengths and achievements beyond the traditional
                    means. The Education Agency has developed a number of award-winning PR and Marketing campaigns
                    for forward-thinking schools. We’ve worked with education providers to develop transformational 
                    marketing plans which have improved communications, 
                    built the organisation’s community profile and helped schools become more profitable.
                    </p>
                </div>
                <div className="right">
                    <img src="./logo.png" alt="logo"/>
                </div>
            </div>
            <Button/>
        </div>
    );
}
 
export default Services;