import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import HotelIcon from '@mui/icons-material/Hotel'
import RepeatIcon from '@mui/icons-material/Repeat'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

export default function Experience() {
  const steps23 = [`<a>sdaas</a>`, 'Create an ad group', 'Create an ad', 'blah blah']
  const steps22 = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
    'blah blah'
  ]
  const steps21 = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
    'blah blah'
  ]

  return (
    <div>
      <div
        id="desktop"
        className="hidden lg:block text-white"
      >
        <div id="2023">
          <Box sx={{ width: '100%' }}>
            <Stepper alternativeLabel>
              {steps23.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
        <div id="2022">
          <Box sx={{ width: '100%' }}>
            <Stepper alternativeLabel>
              {steps23.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
        <div id="2021">
          <Box sx={{ width: '100%' }}>
            <Stepper alternativeLabel>
              {steps23.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
      </div>
      <div
        id="mobile"
        className="lg:hidden"
      >
        <div
          id="2023"
          className="text-white"
        >
          <h1>2023</h1>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  Winner of{' '}
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7058773162825547776?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7058773162825547776%29">
                    Ingeius
                  </a>
                </Typography>
                <Typography>Placed first in FOSS and Julia Track</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  Code
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  color="primary"
                  variant="outlined"
                >
                  <HotelIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  Sleep
                </Typography>
                <Typography>Because you need rest</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                  <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  Repeat
                </Typography>
                <Typography>Because this is the life you love!</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div
          id="2022"
          className="text-white"
        >
          <h1>2022</h1>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  Eat
                </Typography>
                <Typography>Because you need strength</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  Code
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  color="primary"
                  variant="outlined"
                >
                  <HotelIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  Sleep
                </Typography>
                <Typography>Because you need rest</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                  <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  Repeat
                </Typography>
                <Typography>Because this is the life you love!</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div
          id="2021"
          className="text-white"
        >
          <h1>2021</h1>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  Eat
                </Typography>
                <Typography>Because you need strength</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  Code
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  color="primary"
                  variant="outlined"
                >
                  <HotelIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  Sleep
                </Typography>
                <Typography>Because you need rest</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                  <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  Repeat
                </Typography>
                <Typography>Because this is the life you love!</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  )
}
