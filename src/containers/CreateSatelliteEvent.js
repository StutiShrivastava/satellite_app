import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createSatelliteEvent } from '../redux/actions/satelliteActions';
import {getSatelliteList} from '../redux/actions/satelliteActions'
import '../css/CreateEvent.css';
import ObjectInfo from '../containers/ObjectInfo';
import { format } from 'date-fns';

const CreateSatelliteEvent = () => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('');

    const columnsDefsEvents = [
        { headerName: 'Date', field: 'date' },
        { headerName: 'Description', field: 'description' },
        { headerName: 'Priority', field: 'priority' },
        { headerName: 'Satellite Name', field: 'satelliteName', filter: true }
      ];

    useEffect(() => {
        dispatch(getSatelliteList());
      }, [dispatch]);

    const dropdownValues = useSelector(state => state.reducers.satelliteEvents.satelliteList);

    const priorityOptions = ['Low', 'High'];

    const [formData, setFormData] = useState({
        date: '',
        description: '',
        priority: '',
        satelliteName: ''
    });


    const { date, description, priority, satelliteName } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleDropDownChange = (event) => {
        const value = event.target.value;
        setFormData({ ...formData, satelliteName: value });
      };

      const handlePriorityChange = (event) => {
        const value = event.target.value;
        setFormData({ ...formData, priority: value });
      };

    const successMessage = useSelector(state => state.reducers.satelliteEvents.successMessage);
    const createEventSucess = useSelector(state => state.reducers.satelliteEvents.createEventSucess);
    const eventData = useSelector(state => state.reducers.satelliteEvents.events);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get the current date and time
        const currentDate = new Date();
        // Format the date as 'YYYY-MM-DDTHH:mm:ss'
        const formattedDate = format(currentDate, "yyyy-MM-dd'T'HH:mm:ss");
        // Update formData with the formatted date
        const updatedFormData = {
            ...formData,
            date: formattedDate
        };
        dispatch(createSatelliteEvent(updatedFormData));
        // Optionally, reset the form or navigate to another page
        setFormData({ name: '', date: '', description: '' , priority: ''});
    };

    return (
        <div>
            {!createEventSucess ? (
                <div className="create-event">
                    <h2>Create Satellite Event</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="dropdown">Priority:</label>
                            <select
                                id="priority"
                                value={formData.priority}
                                onChange={handlePriorityChange}
                                style={{ width: '563px', height: '34px' }}
                                required
                            >
                                <option value="" disabled>Select an option</option>
                                {priorityOptions.map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dropdown">Satellite Name:</label>
                            <select
                                id="satelliteName"
                                value={formData.satelliteName}
                                onChange={handleDropDownChange}
                                style={{ width: '563px', height: '34px' }}
                                required
                            >
                                <option value="" disabled>Select an option</option>
                                {dropdownValues.map((item) => (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                value={description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <button type="submit">Create Event</button>
                    </form>
                </div>
            ) : (
                <div>
                    <ObjectInfo object={eventData} message={successMessage} />
                </div>

            )}
        </div>
    );
};

export default CreateSatelliteEvent;
