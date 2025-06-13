package com.flowise.dataingestionservice.controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.bean.factory.annotation.Autowired;
import com.flowise.dataingestionservice.service.IngestionService;
//

@RestController


public class IngestionController {

    @Autowired
    private IngestionService ingestionService;
    @PostMapping("/ingest/batch")
    public String triggerBatchIngestion(@RequestBody String dataSource) {
        return "Dummy triggering batch ingestion from:" + dataSource;
    }
}
  