package data.service;

import data.dto.GolfjangDto;
import data.dto.JoiningDto;
import data.dto.JoinmemberDto;
import data.mapper.JoiningMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class JoiningService implements JoiningServiceInter{

    @Autowired
    private JoiningMapper joiningMapper;

    @Override
    public void insertJoin(JoiningDto dto) {
        joiningMapper.insertJoin(dto);
    }

    @Override
    public List<JoiningDto> getJoiningList() {
        return joiningMapper.getJoiningList();
    }
    @Override
    public List<JoiningDto> getMyJoinList(int unum) {
        return joiningMapper.getMyJoinList(unum);
    }

    @Override
    public JoiningDto detailPage(int jnum) {
        return joiningMapper.detailPage(jnum);
    }
    @Override
    public int joinCancel(int jnum) {
        return joiningMapper.joinCancel(jnum);
    }

    @Override
    public void joinMaker(JoinmemberDto dto) {
        joiningMapper.joinMaker(dto);
    }
}
