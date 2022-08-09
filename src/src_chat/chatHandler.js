import moment from 'moment';
const buildComponent = (query = ' ',sentiment='NEUTRAL' ,who = 'AGENT',type='1') => {
    let pivot='';
    if(type=='2'){
        pivot='2';
    }
    let agentOrCustomer = who === 'AGENT' ? 'left-msg'+pivot : 'right-msg'+pivot;
    let relativeURL= who==='AGENT'? 'https://icons.veryicon.com/png/o/system/system-background-area-icon/call-center-4.png':'https://icons.veryicon.com/png/o/miscellaneous/customer-service-icon-library/customer-9.png';
    let divMSG = document.createElement('div');
    divMSG.classList.add('msg'+pivot);
    divMSG.classList.add(agentOrCustomer);
    let divIMG = document.createElement('div');
    divIMG.classList.add('msg-img'+pivot);
    divIMG.style.backgroundImage = 'url('+relativeURL+')';
    let divBubble = document.createElement('div');
    divBubble.classList.add('msg-bubble'+pivot);
    let divInfo = document.createElement('div');
    divInfo.classList.add('msg-info'+pivot);
    let divInfoName = document.createElement('div');
    divInfoName.classList.add('msg-info-name'+pivot);
    let divInfoTime = document.createElement('div');
    divInfoTime.classList.add('msg-info-time'+pivot);
    let divText = document.createElement('div');
    divText.classList.add('msg-text'+pivot);
    let divInfoNameText = document.createTextNode(who);
    let divInfoTimeText = document.createTextNode(moment().format('HH:mm:ss'));
    let divTextText = document.createTextNode(query+ ' ');
    divText.appendChild(divTextText);
    divText.innerHTML += setEmoji(sentiment);
    divInfoTime.appendChild(divInfoTimeText);
    divInfoName.appendChild(divInfoNameText);
    divInfo.appendChild(divInfoName);
    divInfo.appendChild(divInfoTime);
    divBubble.appendChild(divInfo);
    divBubble.appendChild(divText);
    divMSG.appendChild(divIMG);
    divMSG.appendChild(divBubble);
    return divMSG;
};

const setEmoji=(sentiment)=>{

    if(sentiment==='POSITIVE'){
        return "😁";
    }
    if(sentiment==='NEGATIVE'){
        return "😞";
    }
    if(sentiment==='NEUTRAL'){
        return "😐";
    }
    if(sentiment==='MIXED'){
        return "😊 🙁";
    }

}

const buildAgentMSG = (query,sentiment) => {
    document.getElementsByClassName("msger")[0].appendChild(buildComponent(query, sentiment,'AGENT','1'));

};
const buildCustomertMSG = (query,sentiment) => {
    document.getElementsByClassName("msger")[0].appendChild(buildComponent(query,sentiment, 'CUSTOMER','1'));
};

const buildAgentMSGTranslated = (query,sentiment) => {
    document.getElementsByClassName("msger2")[0].appendChild(buildComponent(query, sentiment,'AGENT','2'));

};
const buildCustomertMSGTranslated = (query,sentiment) => {
    document.getElementsByClassName("msger2")[0].appendChild(buildComponent(query, sentiment,'CUSTOMER','2'));
};


export { buildAgentMSG, buildCustomertMSG,buildAgentMSGTranslated,buildCustomertMSGTranslated };
