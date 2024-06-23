// DataGridComponent.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {showAllEvents, showTleInformation} from '../redux/actions/satelliteActions'
import ObjectInfo from '../containers/ObjectInfo';
import '../css/Grid.css';

const mapStateToProps = (state) => ({    
    events: state.reducers.satelliteEvents.events,
    loading: state.reducers.satelliteEvents.loading,
    loadedTle: state.reducers.satelliteEvents.loadedTle,
    tleData: state.reducers.satelliteEvents.tleData,
    loadTleFailure: state.reducers.satelliteEvents.loadTleFailure,
  });
  
  const mapDispatchToProps = {
      showAllEvents,
      showTleInformation,
  };

class EventDataGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
      }

      
  componentDidMount() {
    this.props.showAllEvents();
    console.log(this.props);
  }

  componentDidUpdate() {
    console.log(this.props);
  }
  onRowClicked = (event) => {
    const { satelliteName } = event.data.satelliteName
    console.log('in row clicked', event.data.satelliteName);
    this.props.showTleInformation(event.data.satelliteName);
  };
  
  render() {

    const { events, loading,loadedTle, tleData, loadTleFailure } = this.props;
    const columnsDefsEvents = [
        { headerName: 'Date', field: 'date' },
        { headerName: 'Description', field: 'description' },
        { headerName: 'Priority', field: 'priority' },
        { headerName: 'Satellite Name', field: 'satelliteName', filter: true, floatingFilter: true}
      ];

      return (
        <div>
          <h2>Events</h2>
          {loading && !loadedTle && !loadTleFailure? (
           <div
           className="ag-theme-alpine"
           style={{ height: '400px', width: '900px' }}
          >
           <AgGridReact
             rowData={events}
             columnDefs={columnsDefsEvents}
             onRowClicked={this.onRowClicked}
             pagination={true}
             paginationPageSize={10}
           />
         </div>
          ) : loadedTle ? (
            <div>
              <ObjectInfo object={tleData} message="TLE Info" />
            </div>
          ) : loadTleFailure ? (
            <div>
              <h1>No TLE data found</h1>
            </div>
          ) : null
          }
        </div>
      );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(EventDataGrid);
