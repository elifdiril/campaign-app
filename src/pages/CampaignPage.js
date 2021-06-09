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
    {
        "id": 2,
        "name": "Campaign",
        "description": "Campaign 3",
        "createDate": "05/06/2021",
        "point": 9,
    },
]

export default function CampaignPage() {

    const [item, setItem] = useState(JSON.stringify(CampaignList));

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(CampaignList));
    });


    const increasePoint = (index) => {
        if (index !== -1 && index !== null) {
            let newCampList = JSON.parse(item);
            let updatedElement = JSON.parse(item)[index].point + 1;

            newCampList[index].point = updatedElement;

            localStorage.setItem('item', JSON.stringify(newCampList));
            setItem(JSON.stringify(newCampList))
        }
    }

    const decreasePoint = (index) => {
        if (index !== -1 && index !== null) {
            let newCampList = JSON.parse(item);
            let updatedElement = JSON.parse(item)[index].point - 1;

            newCampList[index].point = updatedElement;

            localStorage.setItem('item', JSON.stringify(newCampList));
            setItem(JSON.stringify(newCampList))
        }
    }

    const updateCampaign = (newItem, index) => {
        let updatedCampList = JSON.parse(item);
        if (index !== -1 && index !== null) {
            let newCampList = newItem;
            updatedCampList[index] = newCampList;
            localStorage.setItem('item', JSON.stringify(updatedCampList));
            setItem(JSON.stringify(updatedCampList));
        }
    }

    const deleteCampaign = (id) => {
        const index = JSON.parse(item).findIndex(x => x.id === id);
        if (index !== -1) {
          const newArray = JSON.parse(item);
          newArray.splice(index, 1);
          setItem( JSON.stringify(newArray));
          localStorage.setItem('item', JSON.stringify(newArray));
        }
    }

    let CampList = item;
    if(typeof CampList === 'string'){
        CampList = JSON.parse(CampList)
    }
    return (
        <div>
            {CampList && CampList.map(item => <CampaignElement key={item.id} item={item}
                updateCampaign={(newItem, index) => updateCampaign(newItem, index)}
                increasePoint={(index) => increasePoint(index)}
                decreasePoint={(index) => decreasePoint(index)}
                deleteCampaign={(index) => deleteCampaign(index)} />)}
        </div>
    )

}
