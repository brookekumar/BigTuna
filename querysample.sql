select count(*) as total_correct from questions
	inner join answers on answers.questions_id = questions.id
	inner join user_answers on answers.id = user_answers.answer_id
	where
		user_answers.user_id = '1'
	--	and  questions.category = 'Reading'
		and answers.is_correct = true