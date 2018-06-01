import React, {Component} from 'react';

import "./home.css";
import HeaderList from "./Headers.json";
import UserStoryList from "./userstories.json";
import Header from "../components/Header/Header";
import Summary from "../components/summary/summary";
import Details from "../components/details/details";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPhases: [],
            selectedData: [],
            selectedStory: null
        };

        this.onHeaderClick = this.onHeaderClick.bind(this);
        this.handleStoryClick = this.handleStoryClick.bind(this);
    }

    onHeaderClick(selectedvalue) {
        const selectedPhases = this.state.selectedPhases;

        const index = selectedPhases.findIndex(phase =>
            phase === selectedvalue.id
        );

        if (index === -1) {
            selectedPhases.push(selectedvalue.id);
        } else {
            selectedPhases.splice(index, 1);
        }

        const selectedData = UserStoryList.filter(obj => {
            const index = selectedPhases.findIndex(phase =>
                phase === obj.currentPhase
            );

            return index > -1;
        });

        this.setState({
            selectedPhases,
            selectedData,
            selectedStory: null});
    }

    handleStoryClick(story) {
        this.setState({selectedStory: story})
    }

    render() {
        return (
            <div>
                <div>
                    <Header data={HeaderList} onHeaderClick={this.onHeaderClick}/>
                </div>
                <div>
                    {this.state.selectedData.length > 0
                        ? <Summary data={this.state.selectedData} onClick={this.handleStoryClick}/>
                        : <div className="alignMessage">
                            {`Please select minimum one option from header to see the data.`}
                        </div>
                    }
                </div>
                <div className="alignDetails">
                    {this.state.selectedStory
                        ? <Details data={this.state.selectedStory}/>
                        : null}
                </div>
            </div>
        );
    }
}

export default Home;
