import React, { useState, useEffect } from 'react';
import CampaignElement from '../components/campaignElement';

const CampaignList = [
    {
        "id": 0,
        "name": "Campaign",
        "description": "Campaign 1",
        "createDate": "10/04/2021",
        "point": 5,
    },
    {
        "id": 1,
        "name": "Campaign",
        "description": "Campaign 2",
        "createDate": "13/04/2021",
        "point": 4,
    },
]

export default function CampaignPage() {

    const [item, setItem] = useState(JSON.parse(localStorage.getItem('item')));

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(CampaignList));
    }, []);


    const increasePoint = (index) => {
        if (index !== -1 && index !== null) {
            let newCampList = JSON.parse(localStorage.getItem('item'));
            let updatedElement = JSON.parse(localStorage.getItem('item'))[index].point + 1;

            newCampList[index].point = updatedElement;

            localStorage.setItem('item', JSON.stringify(newCampList));
            setItem(newCampList)
        }
    }

    const decreasePoint = (index) => {
        if (index !== -1 && index !== null) {
            let newCampList = JSON.parse(localStorage.getItem('item'));
            let updatedElement = JSON.parse(localStorage.getItem('item'))[index].point - 1;

            newCampList[index].point = updatedElement;

            localStorage.setItem('item', JSON.stringify(newCampList));
            setItem(newCampList)
        }
    }

    const updateCampaign = (newItem, index) => {
        let updatedCampList = JSON.parse(localStorage.getItem('item'));
        if (index !== -1 && index !== null) {
            let newCampList = JSON.parse(newItem);
            updatedCampList[index] = newCampList;
            localStorage.setItem('item', JSON.stringify(updatedCampList));
            setItem(newCampList);
        }
    }

    const CampList = JSON.parse(localStorage.getItem('item'));

    return (
        <div>
            {CampList && CampList.map(item => <CampaignElement item={item}
                updateCampaign={(newItem, index) => updateCampaign(newItem, index)}
                increasePoint={(index) => increasePoint(index)}
                decreasePoint={(index) => decreasePoint(index)} />)}
        </div>
    )

}
