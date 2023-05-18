import React, {Component} from "react";

const box = {
    "margin-bottom": "10px",
    width: "100%",
    "max-width": "100%",
    display: "inline-block",
};

class About extends Component {
    render() {
        return (
            <div style={box} class="shadow-sm p-3 mb-5 bg-white rounded">
                <h2>Introduction</h2>
                <p>CoVacci-MOOD platform can be used to monitor sentiment analytics and trends towards vaccines. We generate statistics utilizing the microblogs of social media and online communication platforms. These sentiment information of different vaccines provide insights as a support to adjust vaccine campaigns and educational programs.</p><br/>

                <h4>Developer Guide</h4>
                <p>Analyse sentiments of your platform microblogs and support vaccine educational programs at the same time. Monitor how your platform users' vaccine opinions flow, identify trends and keep them informed with valuable findings. Moreover, you can identify vaccine misinformation and misinformation spreading sources in your application to remove them and reduce social harm causes because of them.</p>
                <p>Maintain your own account and access your previous prediction data and download them anytime without worrying about your data privacy. You can obtain your own set of sentimentally labelled data which will be valuable for research purposes.</p><br/>

                <h4>API Reference</h4>
                <p>Here is the list of available APIs:</p>
                <ul>
                    <li><code>POST /analyse</code>: Obtain predicted sentiment with detailed information of the input text.</li>
                    <li><code>POST /analyseonlysentiment</code>: Obtain only predicted sentiment of the input text.</li>
                </ul>
            </div>
        );
    }
}

export default About;
