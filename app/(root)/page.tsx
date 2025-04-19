import React from 'react'
import Link from "next/link";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";

import { Button } from "@/components/ui/button";
import { dummyInterviews } from '@/constants';

const HomePage = () => {
  return (<>
  <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
              <InterviewCard{...interview} key={interview.id}/>))}
       {/* <p>You haven&apos;t taken any interviews yet</p>*/}
          {/*hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            
          )*/}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
        {dummyInterviews.map((interview) => (
              <InterviewCard {...interview} key={interview.id}/>))}
              {/* <p>You haven&apos;t taken any interviews yet</p> */}
          {/*hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
           
          )*/}
        </div>
      </section>
  </>
  )
}

export default HomePage