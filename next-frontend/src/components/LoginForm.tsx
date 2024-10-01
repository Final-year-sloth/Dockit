import React from 'react'

const INPUT_CLASS = 'border border-border rounded-lg p-2 w-full'
const BUTTON_CLASS = 'rounded-lg p-2 w-full'
const TEXT_COLOR = 'text-muted-foreground'
const LINK_HOVER = 'hover:underline'
const BG_COLOR = 'bg-background'
const CARD_BG_COLOR = 'bg-card'
const SHADOW = 'shadow-lg'
const MAX_WIDTH = 'max-w-sm'
const FLEX_CENTER = 'flex items-center justify-center'
const TEXT_CENTER = 'text-center'
const MARGIN_BOTTOM = 'mb-4'
const MARGIN_TOP = 'mt-4'

const LoginForm = () => {
  return (
    <div className={`flex items-center justify-center min-h-screen ${BG_COLOR}`}>
      <div className={`bg-card p-8 rounded-lg shadow-lg max-w-sm w-full ${CARD_BG_COLOR} ${SHADOW} ${MAX_WIDTH}`}>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Login</h2>
        <form>
          <div className={MARGIN_BOTTOM}>
            <label className={`block ${TEXT_COLOR}`} htmlFor="email">
              Name
            </label>
            <input type="email" id="email" className={INPUT_CLASS} placeholder="yourname@gmail.com" required />
          </div>
          <div className={MARGIN_BOTTOM}>
            <label className={`block ${TEXT_COLOR}`} htmlFor="password">
              Password
            </label>
            <input type="password" id="password" className={INPUT_CLASS} placeholder="********" required />
          </div>
          <div className={`flex items-center ${MARGIN_BOTTOM}`}>
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className={TEXT_COLOR}>
              Remember me
            </label>
          </div>
          <button type="submit" className={`bg-primary text-primary-foreground hover:bg-primary/80 ${BUTTON_CLASS}`}>
            Login
          </button>
        </form>
        <p className={`${TEXT_CENTER} ${TEXT_COLOR} my-4`}>OR</p>
        <div className={`flex justify-around ${MARGIN_BOTTOM}`}>
          <button className={`bg-secondary text-secondary-foreground hover:bg-secondary/80 ${BUTTON_CLASS} w-1/2`}>Continue with Google</button>
          <button className={`bg-secondary text-secondary-foreground hover:bg-secondary/80 ${BUTTON_CLASS} w-1/2`}>Continue with Microsoft</button>
        </div>
        <div className={TEXT_CENTER}>
          <a href="#" className={`${TEXT_COLOR} ${LINK_HOVER}`}>
            Forgotten password?
          </a>
        </div>
        <div className={`${TEXT_CENTER} ${MARGIN_TOP}`}>
          <p className={TEXT_COLOR}>
            Don&apos;t have an account?{' '}
            <a href="/signup" className={`text-primary ${LINK_HOVER}`}>
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
