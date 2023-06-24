import * as React from 'react'
import './blog.css'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import imageflutter from './image/flutter.png'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '@mui/material'

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
  return (
    <div>
      <h1 className="text-white content-center text-center text-xl mb-20 mt-20 lg:text-3xl">
        Welcome to my Blog Section!
        <br /> This is where I occassionaly type out my learnings and stuff I love to learn and
        explore.
      </h1>
      <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center text-white">
        <div>
          <Card
            id="card"
            sx={{ maxWidth: '400px' }}
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
                </Typography>
                <Typography
                  sx={{ fontFamily: 'JetBrains Mono' }}
                  variant="body2"
                >
                  In this blog, we covered what is Flutter, how to get started with flutter and how
                  to build your first app using Flutter!
                </Typography>
              </ThemeProvider>
            </CardContent>
            <CardActions>
              <Button
                id="button"
                size="small"
                onClick={routeChange}
              >
                Read Article!
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card
            id="card"
            sx={{ maxWidth: '400px' }}
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
                </Typography>
                <Typography
                  sx={{ fontFamily: 'JetBrains Mono' }}
                  variant="body2"
                >
                  In this blog, we covered what is Flutter, how to get started with flutter and how
                  to build your first app using Flutter!
                </Typography>
              </ThemeProvider>
            </CardContent>
            <CardActions>
              <Button
                id="button"
                size="small"
                onClick={routeChange}
              >
                Read Article!
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card
            id="card"
            sx={{ maxWidth: '400px' }}
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
                </Typography>
                <Typography
                  sx={{ fontFamily: 'JetBrains Mono' }}
                  variant="body2"
                >
                  In this blog, we covered what is Flutter, how to get started with flutter and how
                  to build your first app using Flutter!
                </Typography>
              </ThemeProvider>
            </CardContent>
            <CardActions>
              <Button
                id="button"
                size="small"
                onClick={routeChange}
              >
                Read Article!
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card
            id="card"
            sx={{ maxWidth: '400px' }}
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
                </Typography>
                <Typography
                  sx={{ fontFamily: 'JetBrains Mono' }}
                  variant="body2"
                >
                  In this blog, we covered what is Flutter, how to get started with flutter and how
                  to build your first app using Flutter!
                </Typography>
              </ThemeProvider>
            </CardContent>
            <CardActions>
              <Button
                id="button"
                size="small"
                onClick={routeChange}
              >
                Read Article!
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card
            id="card"
            sx={{ maxWidth: '400px' }}
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
                </Typography>
                <Typography
                  sx={{ fontFamily: 'JetBrains Mono' }}
                  variant="body2"
                >
                  In this blog, we covered what is Flutter, how to get started with flutter and how
                  to build your first app using Flutter!
                </Typography>
              </ThemeProvider>
            </CardContent>
            <CardActions>
              <Button
                id="button"
                size="small"
                onClick={routeChange}
              >
                Read Article!
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card
            id="card"
            sx={{ maxWidth: '400px' }}
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
                </Typography>
                <Typography
                  sx={{ fontFamily: 'JetBrains Mono' }}
                  variant="body2"
                >
                  In this blog, we covered what is Flutter, how to get started with flutter and how
                  to build your first app using Flutter!
                </Typography>
              </ThemeProvider>
            </CardContent>
            <CardActions>
              <Button
                id="button"
                size="small"
                onClick={routeChange}
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
