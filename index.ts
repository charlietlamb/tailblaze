#!/usr/bin/env node

import { exec } from 'child_process'
import { writeFile } from 'fs'
import { fileContent } from './files/fileContent'

// Define the npm commands you want to run
const npmCommands = [
  'npm install tailwindcss postcss autoprefixer postcss-cli',
  'npx tailwindcss init',
]

// Function to run npm commands
const runNpmCommands = () => {
  npmCommands.forEach((command, index) => {
    // Execute each command
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${command}`)
        console.error(stderr)
      } else {
        console.log(`Command executed successfully: ${command}`)
        console.log(stdout)

        // After the last command has finished, write the files
        if (index === npmCommands.length - 1) {
          fileContent.forEach((file) =>
            writeFile(file.path, file.content, (err) => {
              if (err) {
                console.error(`Error writing to ${file.path}: ${err}`)
              } else {
                console.log(`Successfully wrote to ${file.path}`)
              }
            })
          )
        }
      }
    })
  })
}

// Run the npm commands
runNpmCommands()
