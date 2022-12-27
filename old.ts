// Import stylesheets
import './style.css';
import { startCase } from 'lodash';
import _ from 'lodash';
import pug from 'pug';
import moment = require('moment');

// Write TypeScript code!
const data = {
  deleted: false,
  type: 'MSP_INVITE',
  params: {
    msp: {
      id: '9633d936-9eda-45f0-a089-7c68590f4e8f',
      name: 'Manthan & Creating MSP Find or Create Mutual Success Plan',
      usp: {
        link: 'https://originals.dev.buyerassist.io/ui/alignx/msp/9633d936-9eda-45f0-a089-7c68590f4e8f?uspid=98d7a2bd-96e0-4881-a23c-2e70f2001e27',
      },
      buyerCompanyName: 'Manthan',
      buyerCompanyId: '6322e923a95db800088abde8',
      economicImpact: null,
    },
    tasks: [],
    invitees: [
      {
        firstName: 'Nitesh',
        lastName: 'Jha',
        fullName: 'Nitesh Jha',
      },
      {
        firstName: 'Nitesh',
        lastName: 'Jha',
        fullName: 'Nitesh Jha',
      },
    ],
  },
  sender: {
    id: '8bf935a4-6171-419b-b831-fd67b656ed8a',
    email: 'sumit.agarwal@buyerassist.io',
    firstName: 'Sumit',
    lastName: 'Agarwal',
    persona: null,
    fullName: 'Sumit Agarwal',
    type: 'SELLER',
  },
  options: {
    cc: [],
    from: 'notifications@buyerassist.io',
  },
  recipients: [
    {
      id: '3b714493-ba8a-45f0-a1ca-cdb549721fb7',
      email: 'nitesh.jha@buyerassist.io',
      firstName: 'Nitesh',
      lastName: 'Jha',
      persona: 'MSP_INVITEE',
    },
    {
      id: 'd2aae9ef-dd02-4be6-9978-d709a7b57573',
      email: 'anuj.gupta@buyerassist.io',
      firstName: 'Anuj',
      lastName: 'Gupta',
      persona: 'MSP_OWNER',
    },
  ],
  metadata: {
    scopeId: '9633d936-9eda-45f0-a089-7c68590f4e8f',
    scopeType: 'MSP',
    references: [
      {
        id: '9633d936-9eda-45f0-a089-7c68590f4e8f',
        type: 'MSP',
      },
    ],
  },
  account: {
    id: '6322e923a95db800088abde8',
    name: 'Manthan',
  },
  orgId: 'originals',
  createdById: '8bf935a4-6171-419b-b831-fd67b656ed8a',
  context: {
    correlationId: '1443bb78-abe8-4b49-863d-a14e11050cac',
    updatedById: '8bf935a4-6171-419b-b831-fd67b656ed8a',
  },
};

export const transformTemplateToHtml = (
  template: string,
  data: Record<string, unknown>
): string => {
  const compiledFunction = pug.compile(`${template}`);
  const htmlFormat = compiledFunction(data);
  return htmlFormat;
};

export const formatTemplateMessage = (
  messageTemplate: string,
  data: Record<string, unknown>
) => {
  const compiled = _.template(messageTemplate);
  return compiled(data);
};

const temp =
  "Invited **<%_.join(_.map(invitees, invitee => {return invitee.firstName}), ',')%>** to MSP **${msp.name}**";
const temp1 =
  'Invited **<%_.map(invitees, function(resource) { %><%- resource.firstName %><% })%>** to MSP **${msp.name}**';

const message = formatTemplateMessage(temp1, { ...data.params });

//console.log(message);
const q = 1655865879000;
// Just modify what you want
const endDay = moment(q).utc().endOf('day').valueOf();
const f = moment(q).isoWeek();
const y = moment(q).endOf('isoWeek').utc().valueOf();
const u = moment(q).endOf('month').utc();
const i = moment(q).subtract(1, 'months').endOf('month').utc();
var a = moment(u);
var b = moment(i);
console.log(a.diff(b, 'months')); // =1

const timestamp = moment(y, 'YYYY')
  .add(f, 'weeks')
  .endOf('isoWeek')
  .utc()
  .valueOf();
console.log(i.valueOf());
