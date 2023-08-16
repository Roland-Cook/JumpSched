from fastapi import APIRouter, Depends, HTTPException, status
from queries.testimonial import TestimonialIn, Testimonialrepository, TestimonialOut
from typing import Optional, List, Union

router = APIRouter()

@router.post("/testimonial")
def create_testimonial(
    testimonial: TestimonialIn,
    repo: Testimonialrepository = Depends()
):
    return repo.create(testimonial)


@router.get("/testimonial", response_model=List[TestimonialOut])
def get_all_test(
    repo:Testimonialrepository = Depends(),
):
    return repo.get_all_test()