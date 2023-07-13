import * as React from 'react'
import './blog.css'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import imageflutter from './image/flutter.png'
import imagevim from './image/vim.png'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '@mui/material'
import Footer from '../footer/socialfollow'

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"JetBrains Mono"'
    ].join(',')
  }
})

export default function ImgMediaCard() {
  let navigate = useNavigate()
  const routeChange = () => {
    let path = `./blog1`
    navigate(path)
  }
  const routeChange1 = () => {
    let path = `./blog2`
    navigate(path)
  }
  return (
    <div>
      <h1 className="text-white content-center text-center text-xl mb-5 mt-20 lg:text-3xl">
        Welcome to my Blog Section!
        <br />
      </h1>
      <p className="text-white content-center text-center text-sm mb-20 lg:text-xl">
        This is my chill zone, where I casually share my learnings and dive into the things I
        absolutely love to explore.
      </p>
      <div className=" ml-8  h-screen grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center text-white">
        <div>
          <Card
            id="card"
            sx={{ maxWidth: '400px', height: '500px' }}
          >
            <CardMedia
              component="img"
              image={imageflutter}
              alt="test"
              sx={{ height: 'full', width: 1 / 2 }}
            />
            <CardContent>
              <ThemeProvider theme={theme}>
                <Typography
                  sx={{ fontFamily: 'JetBrains Mono' }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Introduction to Flutter
                  <div className="hidden lg:block">
                    <br />
                  </div>
                </Typography>
                <Typography
                  sx={{ fontFamily: 'JetBrains Mono' }}
                  variant="body2"
                >
                  Welcome to our comprehensive blog post where we delve into the fundamentals of
                  Flutter, provide a detailed guide on how to get started, and walk you through the
                  process of building your inaugural app using this powerful framework.
                  <div className="hidden lg:block">
                    <br />
                  </div>
                </Typography>
              </ThemeProvider>
            </CardContent>
            <CardActions>
              <Button
                id="button"
                size="small"
                onClick={routeChange}
                sx={{
                  color: 'white',
                  ':hover': {
                    bgcolor: '#08fdd8',
                    color: 'black'
                  }
                }}
              >
                Read Article!
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card
            id="card"
            sx={{ maxWidth: '400px', height: '500px' }}
          >
            <CardMedia
              component="img"
              image={imagevim}
              alt="test"
              sx={{ height: 'full', width: 1 / 2 }}
            />
            <CardContent>
              <ThemeProvider theme={theme}>
                <Typography
                  sx={{ fontFamily: 'JetBrains Mono' }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Introduction to Vim Part:1
                </Typography>
                <Typography
                  sx={{ fontFamily: 'JetBrains Mono' }}
                  variant="body2"
                >
                  Get ready to level up your productivity and efficiency with Vim! Gain a solid
                  understanding of this powerful text editor as I introduce it's key features,
                  provide expert tips on getting started, and guide you through the process of
                  harnessing Vim's full potential.
                </Typography>
              </ThemeProvider>
            </CardContent>
            <CardActions>
              <Button
                id="button"
                size="small"
                onClick={routeChange1}
                sx={{
                  color: 'white',
                  ':hover': {
                    bgcolor: '#08fdd8',
                    color: 'black'
                  }
                }}
              >
                Read Article!
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card
            id="card"
            sx={{ maxWidth: '400px', height: '500px' }}
          >
            <CardMedia
              component="img"
              image={imagevim}
              alt="test"
              sx={{ height: 'full', width: 1 / 2 }}
            />
            <CardContent>
              <ThemeProvider theme={theme}>
                <Typography
                  sx={{ fontFamily: 'JetBrains Mono' }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Introduction to Vim Part:2
                </Typography>
                <Typography
                  sx={{ fontFamily: 'JetBrains Mono' }}
                  variant="body2"
                >
                  Get ready to level up your productivity and efficiency with Vim! Gain a solid
                  understanding of this powerful text editor as I introduce it's key features,
                  provide expert tips on getting started, and guide you through the process of
                  harnessing Vim's full potential.
                </Typography>
              </ThemeProvider>
            </CardContent>
            <CardActions>
              <Button
                id="button"
                size="small"
                onClick={routeChange1}
                sx={{
                  color: 'white',
                  ':hover': {
                    bgcolor: '#08fdd8',
                    color: 'black'
                  }
                }}
              >
                Read Article!
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  )
}
