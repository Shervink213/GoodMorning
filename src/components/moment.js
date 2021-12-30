import moment from 'moment';
<div>
    <p>Day: {moment().format('dddd')}</p>
    <p>Date: {moment().format('LL')}</p>
</div>

export default moment
